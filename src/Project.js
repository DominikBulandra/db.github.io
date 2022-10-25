import React, { Component } from 'react';
import { connect } from "react-redux";
import {Spring} from 'react-spring/renderprops'
import { postsFetched,getAllStatPostsImages } from "./config/actions/index";
import './style.css';
let lastScrollY = 0;
let ticking = false;

export class Project extends Component {
  constructor(props) {
    
    super(props);
    this.navRef = React.createRef();
    this.state = {
      email: '',
      password: ''
    };
  }
  componentDidMount(){
  
    window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
      lastScrollY = window.scrollY;
  
      if (!ticking) {
        window.requestAnimationFrame(() => {
          //this.navRef.current.style.top = `${lastScrollY}px`;
          console.log(this.navRef.current.style.top);
          const styles = getComputedStyle(this.navRef.current)
  
          //console.log(styles) // rgb(0, 0, 0)
         
          ticking = false;
        });
     
        ticking = true;
      }
    };  
  render() {
    console.log(this.props.images);
    const spanStyles = {
      color: "#fff",
      borderColor: "#00f"
    };
      let styles = {
        margin: '20px',
        width: '250px',
        height: '250px',
        backgroundColor: "yellow",
      };
      const renderAuthButton="";
      
    return (



      <Spring
  from={{ opacity: 0, marginTop: -500 }}
  to={{ opacity: 1, marginTop: 0 }}
  config={{duration:1000}}>
    
  {props => <div style={props}>      <div  ref={this.navRef} className="container" style={{backgroundColor: this.props.color,position: "relative",maxWidth: '100%'}}>
            <div className="row justify-content-md-center">
       <div className="col-12 " >
       <h1 style={{marginTop: '50px', marginBottom: '50px'}}>{this.props.title}</h1>
    
  
    <div class="container">
  <div class="row">
    <div class="col-12 col-xs-6 col-md-6">
    <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
   
    </div>
    <div class="col-12 .col-xs-6 col-md-6">
    {this.props.images.map(function(object,i){

return (

<div className='col'>
       {
            object[0] ==this.props.id &&<div className='col'><img src={object[1]} className="images" ></img></div>
       
       }
       
    </div>)
},this)}
    </div>
  </div></div>



      
 

  
    
 </div>
 </div>
 </div></div>}
</Spring>
  
    );
  }
}



const mapStateToProps = (state) => {
  
  return {
   
    images: state.allposts.statPostImages
  }
};
const mapDispatchToProps = { getAllStatPostsImages };

export const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);