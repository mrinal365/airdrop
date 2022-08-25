import './App.css';
import background from './assets/claim/background.png';
import logo from './assets/claim/logo.png';
import logoSimple from './assets/claim/logo-simple.png';
import secLogo1 from './assets/claim/sec-logo-1.png';
import secLogo2 from './assets/claim/sec-logo-2.png';
import secLogo3 from './assets/claim/sec-logo-3.png';
import secLogo4 from './assets/claim/sec-logo-4.png';
import secLogo5 from './assets/claim/sec-logo-5.png';
import secLogo6 from './assets/claim/sec-logo-6.png';
import secLogo7 from './assets/claim/sec-logo-7.png';
import secLogo8 from './assets/claim/sec-logo-8.png';
import hamburg from './assets/claim/hamburg.png';


import Line from './assets/claim/linee.png';
import wave from './assets/claim/wiggly-divider.png';
import {injected} from './Connector/Connectors';
import { useWeb3React } from '@web3-react/core';
import { disconnect } from 'process';
import { useState } from 'react';

function Claim() {
    const [showModal,setShowModal]=useState(false);
    const {active,account,library,activate,deactivate}=useWeb3React();
    async function connect(){
        try{
            await activate(injected)
        } catch(ex){
            console.log(ex)
        }
    }
    async function disconnect(){
        try{
            deactivate()
        } catch(ex){
            console.log(ex)
        }
    }

  return (
    /*claim page starts*/
    <div style={{background:'black',margin:0,padding:0,minHeight:"100vh",height:'auto'}}>
      {/* Section claim starts */}
      <section className="home-section">
        {/* Nav bar starts here */}
        <div className="nav-bar">
          <img className="header-logo" src={logo}></img>
          <div className="nav-text-container">
            <p className="nav-links">Read the plebifesto</p>
            <p className="nav-links">Sacrifice</p>
            <p className="nav-links">Twitter</p>
            <p className="nav-links">Telegram</p>
            <div className="nav-button mobile-hidden">
              <p style={{fontSize:12}}>Buy Now</p>
            </div>
            
            {active?<div onClick={disconnect}  className="nav-button red">
              <p style={{fontSize:12}}>Disconnect</p>
            </div>
            :<div onClick={connect} className="nav-button red">
              <p style={{fontSize:12}}>Connect Wallet</p>
            </div>}
            
            <div onClick={()=>{setShowModal(!showModal)}} className="mobileView" style={{cursor:'pointer'}}>
                <img style={{height:20}} src={hamburg}/>
            </div>
            
          </div>
        </div>
        {
        showModal?
            <div style={{zIndex:99,position:'absolute',color:'white',height:'100%',maxWidth:'100vw',width:'100vw',background:'black'}}>
                <p style={{color:'white',paddingLeft:"20%",marginTop:80,marginBottom:20}}>Read the plebifesto</p>
                <p style={{color:'white',paddingLeft:"20%",marginBottom:20}}>Sacrifice</p>
                <p style={{color:'white',paddingLeft:"20%",marginBottom:20}}>Twitter</p>
                <p style={{color:'white',paddingLeft:"20%",marginBottom:20}}>Telegram</p>
                {/* <div style={{width:'80px'}} className="nav-button">
                    <p style={{fontSize:12}}>Buy Now</p>
                </div> */}
            </div>:
        null}
        {/* Nav bar ends here */}



        {/* center div starts */}
        <div className="claim-div">
          <div className="claim-div-wrapper">
            {/* pleb logo starts */}
            <div className="circle">
              <img style={{height:100}} src={logoSimple}></img>
            </div>
            {/* pleb logo ends  */}

            <p className="secondary-text" style={{paddingTop:80}}>BUCKLE UP BUTTERCUP</p>
            <p className="primary-text" style={{marginTop:10,marginBottom:30}}>GRAB YOUR $PP HERE</p>
            <p className="secondary-text">FREE money for all Plebs.</p>
            <p className="secondary-text">Whales get nothing.</p>

            {/* claim button starts */}
            <div style={{height:'auto',background:'',marginTop:15,width:'100%',display:'flex',justifyContent:'center'}}>
              <div style={{padding:'10px 100px',borderRadius:15,width:'fit-content',cursor:'pointer',background:'red'}}>
                <p style={{color:'white',fontSize:12}}>CLAIM AIRDROP</p>
              </div>
            </div>
            {/* claim button ends */}
          </div>
        </div>
        {/* centre div ends */}



        {/* wave image starts */}
        <div style={{heught:'auto',maxWidth:"100%",width:"100vw",background:'',display:'flex',justifyContent:'center'}}>
          <img style={{height:10,marginTop:50}} src={wave}/>
        </div>
        {/* wave image ends */}

      </section>
      {/* Section claim ends  */}

      <section style={{textAlign:'center',height:'auto',paddingBottom:100,color:'white',background:'#020710',paddingTop:30,maxWidth:'100vw'}}>
        <p style={{marginTop:100,color:'red',fontSize:14,fontWeight:500}}>FREE CLAIM</p>
        <h1>Minting Breakdown</h1>
        <p className="para-pri">Anyone who owned between $1 and $1000 of the</p>
        <p className="para-pri">following coins at GMT 00:00 07/07/22 will be eligible to</p>
        <p className="para-pri">Claim 369,000 PoorPleb ($PP) tokens</p>
        <div className="main-logo-container">
          <div className="logo-container">
            <div className="logo-row">
              <div className="logo-row-inner">
                <img className='secLogoContainer'  src={secLogo1}/>
                <img className="dot-line" src={Line}/>
                <img className='secLogoContainer'  src={secLogo2}/>
              </div>
              <img className="center-dot-line dot-line"  src={Line}/>
              <div className="logo-row-inner">

                <img className='secLogoContainer' src={secLogo3}/>
                <img className="dot-line" src={Line}/>
                <img className='secLogoContainer' src={secLogo4}/>
              </div>
            </div>
            <div className="logo-row">
              <div className="logo-row-inner">
                <img className='secLogoContainer' src={secLogo5}/>
                <img className="dot-line" src={Line}/>
                <img className='secLogoContainer' src={secLogo6}/>
              </div>
              <img className="center-dot-line dot-line" style={{height:8}} src={Line}/>
              <div className="logo-row-inner">
                <img className='secLogoContainer' src={secLogo7}/>
                <img className="dot-line" src={Line}/>
                <img className='secLogoContainer' src={secLogo8}/>
              </div>
            </div>
          </div>
        </div>

        <p className="para-pri">Anyone who sacrificed less than $1000 for the following</p>
        <p className="para-pri">project will be able to claim369,000 PoorPleb($PP)</p>
        <p className="para-pri">tokens. You can check for your eligibility here</p>
      </section>
      <section className="footer">
        <p className="secondary-text">CopyRight @2022 PoorPleb. All Rights Reserved.</p>
      </section>
    
    </div>
  );
}

export default Claim;
