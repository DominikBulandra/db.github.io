import React, { Component } from 'react';
import { postsFetched,getAllStatPostsImages } from "./config/actions/index";
import { connect } from "react-redux";
import {storage, fire  , base, firestore}  from './config/Fire';

import 'quill/dist/quill.snow.css'; 
import ReactQuill from 'react-quill';
export class Edit extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
   
   // this.handleChange = this.handleChange.bind(this);
    this.state = {
      file:'',
      url:'',
      isFile:false,
      imagePreviewUrl: '',
        posts: {},
        currentUser: null,
        title: this.props.location.title,
        text: this.props.location.text,
        color:  this.props.location.color,
        id: this.props.location.id
      };
}

componentWillMount(){
  this.postsRef = base.syncState('posts',{
      context: this,
      state: 'posts'
  });
  
  
}
handleImageAsFile = (e) => {
  console.log(e.target.files[0]);
  const image = e.target.files[0]
  this.setState({isFile: true})
 this.setState({file: image})
 console.log(this.state.file);
}
componentDidMount(){
 

}
onprops(){
  if (this.props.location.id!=this.state.id){
  const title=this.props.location.title;
  const text=this.props.location.text;
  const id=this.props.location.id;
  const color=this.props.location.color;
  this.setState({ title: title});
  this.setState({ id: id});
  this.setState({ text: text});
  this.setState({ color: color});
  console.log(this.state.title);
  console.log(this.props.location.title);
  }
}
handleChangeTitle(e){
  e.preventDefault();

  const title = e.target.value;
  this.setState({title});


  console.log(this.state.title);

}
handleChangeText(e){
  e.preventDefault();
  const text = e.target.value;
 
  

  this.setState({text});
  console.log(e.target.value);
 

}
handleChangeColor(e){
  e.preventDefault();
  const color = e.target.value;
 
  

  this.setState({color});
  console.log(e.target.value);
 

}

deletePost =() =>{
  const databaseRef = fire.database().ref('posts/'+this.props.location.id).remove().then(() => {
    console.log("plik usuniety");
  }).catch((error) => {
   console.log("bład:"+error);
  });

}
delete = (id,name)=>{

 // var desertRef = storage.child('images/1576580858304/images.png');
  // Delete the file
  const deleteTask = storage.ref(`/images/${id}/${name}`).delete().then(() => {
    console.log("plik usuniety");
  }).catch((error) => {
   console.log("bład:"+error);
  });
  
}
update(e){
  e.preventDefault();
  const id = this.state.id;
  const title = this.state.title;
  const text = this.state.text;
  const color = this.state.color;
  console.log(this.state.id);
  //let userRef = this.firestore.ref('posts/' + this.props.location.id);
  const databaseRef = fire.database().ref('posts/'+this.props.location.id);
  if  (this.state.isFile){

    console.log(this.state.file);
  const uploadTask = storage.ref(`/images/${this.state.id}/${this.state.file.name}`).put(this.state.file);
  console.log("obrazek: "+uploadTask);
};
// this is to get the stat-cards table from firebase
const statCardsRef = databaseRef.update({
  
  title: title,
  text: text,
  color: color
}).then[()=> {
  console.log('updated!');
}];
 console.log(statCardsRef);
 
  // firestore.Collection('posts').oc(this.props.location.id).update({
  //   title: title,
  //   text: text,
  //   color: color
  // })
  
 
  //fire.database().ref().child('posts').child('1').set(data);
  console.log(this.props.posts);
}
componentDidUpdate(){
  console.log(this.props.posts);
  
 this.onprops();
 }
 _handleImageChange(e){
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }

  reader.readAsDataURL(file)

 };
 handleChangeEditor(editor) {
  //console.log('background', editor);
  const text = editor;
   this.setState({text});
};
  render() {
    //const { quill, quillRef } = useQuill();
    //this.onprops();
      //wyśietlanie listy projektów
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
      console.log(this.props.location.title);
     console.log(this.props.images);
      return (<div>
        <h1>Edytuj</h1>
        <form>
         
        <div className="form-group">
        {this.state.id}
         <label htmlFor="title">Tytuł</label>
         <input type="textarea"  value={this.state.title} onChange={this.handleChangeTitle.bind(this)} name="title" className="form-control" placeholder="Enter title" />
         <small id="emailHelp" className="form-text ">We'll never share your email with anyone else.</small>
        </div>
         <div className="form-group">
        <label htmlFor="exampleInputPassword1">treść</label>
        <div className="form-group">
   <ReactQuill theme="snow" value={this.state.text} onChange={this.handleChangeEditor} style={{ width: 500, height: 500 }}/>
   
    </div>
    </div>
    <div className="form-group" style={{ marginTop: '50px' }}>
      <input name="color" value={this.state.color} type="color" id="myColor" onChange={this.handleChangeColor.bind(this)} ></input>
        </div>
        <div className="form-group">
        <input className="fileInput" 
            type="file" 
            onChange={this.handleImageAsFile} />
            </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">Usuń</button>
        <div className="imgPreview">
          {$imagePreview}
        </div>
        

      
        <button onClick={this.deletePost} style={{marginLeft: '25px'}} className="btn btn-success">Usuń</button>
        <button onClick={this.update} style={{marginLeft: '25px'}} className="btn btn-success">Zmień</button>
   </form>
   
   {this.props.images.map(function(object,i){

return (

<div>
       {
            object[0] ==this.state.id && <p><img src={object[1]} style={{width: '150px'}}></img>  <button onClick={() => this.delete(object[0],object[2])} className="btn btn-primary">Usuń</button></p>
       }
    </div>)
},this)}
   </div>
      )
   
  }
}

const mapStateToProps = (state) => {
  
  return {
    
    posts: state.posts,
    images: state.allposts.statPostImages
  }
};
const mapDispatchToProps = { postsFetched, getAllStatPostsImages };

export const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);