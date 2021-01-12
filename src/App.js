import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

//from the example drum machine
const soundStore = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      power:true,
      soundActive:false,
      displaySound:'Choose a button to play',
    };

    this.playSound=this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.powerControl=this.powerControl.bind(this);

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress=(e) =>{
    let sound = soundStore.filter(x=>x.keyCode===e.keyCode)
    if (this.state.power === true) {
      this.playSound(sound[0].url)
      this.setState({displaySound:sound[0].id});
      }else{
        this.setState({
          displaySound:'System must be on to play sound'
        })
    }
  }

  onButtonSubmit=(e)=>{
    if(this.state.power===true){
    let sound = soundStore.filter(x=>x.keyTrigger===e.target.value)
    this.playSound(sound[0].url)
    this.setState({displaySound:sound[0].id});
    }else{
      this.setState({
        
        displaySound:'System must be on to play sound'
      })

    }
    
  }
  
  playSound(e) {
    if(this.state.power===true){
      let soundToPlay=new Audio(e);
      soundToPlay.play();
    }else{
      this.setState({
        
        displaySound:'System must be on to play sound'
      })
    }
    
  }

  powerControl() {
    if(this.state.power===true){
  

      this.setState({
        power: !this.state.power,
        displaySound: 'System Off'
      });
    }else{
      this.setState({
        power: !this.state.power,
        displaySound: 'Choose a button to play'
      });

    }

 
   
  }
 



  


  render(){
    let displayStyle={
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      width: '300px',
      height: 'auto',
      marginLeft: 'auto',
      backgroundColor:'rgb(160, 227, 227)',
      marginRight: 'auto',
      marginTop: '50px',
      fontFamily:'monospace'
    



    }
    



  return(
    <div className="App" style={displayStyle}>
      <Container fluid>
      <div id="drum-machine" className='text-center'>
        <h1><Badge pill className='text-align-center' variant='warning'>Drum Machine</Badge></h1>
        <div id='display' style={{justifyContent:'center'}}>
  <Badge className='text-align-center' variant='dark'>{this.state.displaySound}</Badge>
        </div>
      
        <div id="drum-pads" className='col' >
          <div className='drum-pads' >
            <div id='top-row' style={{justifyContent:'center'}} className='row mt-1 col'>
            <div className='drump-pad'><Button id={soundStore[0].id}  onClick={this.onButtonSubmit} value={soundStore[0].keyTrigger} variant='warning' size='lg' >Q </Button> </div>
            <div className='drump-pad'><Button id={soundStore[1].id} onClick={this.onButtonSubmit} value={soundStore[1].keyTrigger} variant='warning' size='lg' >W</Button></div>
            <div className='drump-pad'><Button id={soundStore[2].id} onClick={this.onButtonSubmit} value={soundStore[2].keyTrigger} variant='warning' size='lg' >E</Button></div>
            </div>
            <div id='mid-row' style={{justifyContent:'center'}} className='row mt-1 col'>
            <div className='drump-pad'><Button id={soundStore[3].id} onClick={this.onButtonSubmit} value={soundStore[3].keyTrigger} variant='warning' size='lg' >A</Button></div>
            <div className='drump-pad'><Button id={soundStore[4].id}  onClick={this.onButtonSubmit} value={soundStore[4].keyTrigger} variant='warning' size='lg' >S</Button></div>
            <div className='drump-pad'><Button id={soundStore[5].id}  onClick={this.onButtonSubmit} value={soundStore[5].keyTrigger} variant='warning' size='lg' >D</Button></div>
            </div>
            <div id='bot-row' style={{justifyContent:'center'}} className='row mt-1 col'>
            <div className='drump-pad'><Button id={soundStore[6].id}  onClick={this.onButtonSubmit} value={soundStore[6].keyTrigger} variant='warning' size='lg' >Z</Button></div>
            <div className='drump-pad'><Button id={soundStore[7].id} onClick={this.onButtonSubmit} value={soundStore[7].keyTrigger} variant='warning' size='lg' >X</Button></div>
            <div className='drump-pad'><Button id={soundStore[8].id}  onClick={this.onButtonSubmit} value={soundStore[8].keyTrigger} variant='warning' size='lg' >C</Button></div>
            </div>
          </div>
      </div>
  
      
          {this.state.power===true?
          <div className='row mt-2' style={{justifyContent:'center'}}>
          <Button onClick={this.powerControl} variant='danger' size='md'>Turn Off</Button>
          </div>
            :
            <div className='row mt-2' style={{justifyContent:'center'}}>
            <div className='drump-pad'><Button onClick={this.powerControl} variant='success' size='md'>Turn On</Button></div>
            </div>
          }

     
        
      </div>
      </Container>
    </div>
  );}
}

export default App;
