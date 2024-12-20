import {React,useState} from 'react';
import axios from 'axios';
import playerslist from '../data/players'
import Modal from 'react-modal';
import './Admin.css'
/*"start": "react-scripts start",*/
Modal.setAppElement('#root');
const Admin = () => {
    const [SelectedOption,setSelectedOption] = useState(""); 
    const [selectedKey, setSelectedKey] = useState("");
    const [selectedMatchId, setSelectedMatchId] = useState("");
    const [opponents,setopponents] = useState("");
    const [formData, setFormData] = useState({
        id: '', 
        matchType: '', // Default match type 
        matchId: '', 
        matchDate: '', 
        opponent: '', 
        series: 'BTH', 
        position: '', 
        runs: '', 
        ballsFaced: '', 
        overs: '', 
        runsConceded: '', 
        wickets: '', 
        catches: '', 
        runOuts: '', 
        stumpings: ''
    });
    
    const [ttype, setttype] = useState(""); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentDate = new Date();
    const apiUrl = process.env.REACT_APP_API_URL;
    const tournament1 = {
        title: 'HUPL Tournament',
        matches: [
            { date: '11/2/2024', Time: '2.30 AM', opponent: 'Striders', location: 'Badri Stadium' },
            { date: '11/23/2024', Time: '2.00 PM', opponent: 'Huskies', location: 'Badri Stadium' },
            { date: '12/21/2024', Time: '7.30 AM', opponent: 'Stafford', location: 'Cullen Cricket Ground' },
            { date: '1/11/2025', Time: '7.30 AM', opponent: 'HTCC', location: 'Badri Stadium' },
            { date: '2/1/2025', Time: '10.45 AM', opponent: 'Exiles', location: 'Cullen Cricket Ground' },
            { date: '2/8/2025', Time: '10.45 AM', opponent: 'Old farm Rangers', location: 'Badri Stadium' },
            { date: '3/8/2025', Time: '7.30 AM', opponent: 'Nirvana', location: 'Cullen Cricket Ground' },
            // Add more matches as needed
        ]
    };

    const tournament2 = {
        title: 'BTH Tournament',
        matches: [
            { date: '11/9/2024', Time: '7.30 AM',opponent: 'Old Farm Rangers', location: 'BTH Ground' },
            { date: '11/16/2024', Time: '11.00 AM', opponent: 'Cypress Warriors', location: 'BTH Ground' },
            { date: '12/7/2024', Time: '7.30 AM', opponent: 'Houston Scorpions', location: 'BTH Ground' },
            { date: '12/14/2024', Time: '11.30 AM', opponent: 'Wolfpack Icons', location: 'BTH Ground' },
            { date: '12/22/2024', Time: '11.30 AM', opponent: 'BTAMU', location: 'BTH Ground' },
            { date: '1/4/2025', Time: '11.30 AM', opponent: 'Desert Eagles', location: 'BTH Ground' },
            { date: 'TBD', opponent: 'TBD', location: 'BTH Ground' },
            // Add more matches as needed
        ]
    };
    
    const Clearfields = () => {
        setFormData({id: '', 
            matchType: '', // Default match type 
            matchId: '', 
            matchDate: '', 
            opponent: '', 
            series: 'BTH', 
            position: '', 
            runs: '', 
            ballsFaced: '', 
            overs: '', 
            runsConceded: '', 
            wickets: '', 
            catches: '', 
            runOuts: '', 
            stumpings: ''
        });
        setSelectedMatchId("");
        setopponents("");
        setSelectedKey("");
        setSelectedOption("");
    }

    const GetResults = (event) => {
        const selectedValue = event.target.value; 
        setSelectedOption(selectedValue); 
        const selectedOptionObj = playerslist.find(option => option.id === selectedValue); 
        if (selectedOptionObj) { 
            setSelectedKey(selectedOptionObj); 
        } else { 
            setSelectedKey(""); 
        }
        HandleMainData(event);
    }
    const HandleMainData = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState, 
            [name]: value 
       }));

    }

    const TournmentType = (event) =>{
        //console.log(event.target.value)
        setttype(event.target.value);
        HandleMainData(event)
    }
    const GetOpponent = (event) =>{
       let currenval = event.target.value;
        if(ttype === 'huplmatches'){
            //console.log(event.target.value);
            tournament1.matches.forEach((matches,idx) => {
                if(currenval === matches.date){
                    setopponents(matches.opponent);
                    setSelectedMatchId(idx+1)
                    HandleMainData(event)
                }
            });
        }else if(ttype === 'bthmatches'){
            //console.log(event.target.value);
            tournament2.matches.forEach((matches,idx) => {
                if(currenval === matches.date){
                    setopponents(matches.opponent);
                    setSelectedMatchId(idx+1)
                    HandleMainData(event)
                }
            });
        }
            
        
       
    }
   
    const InsertData = async (event) => {
        event.preventDefault(); 
        const newMatch = { 
            matchId: document.getElementById('matchId').value, 
            matchDate: formData.matchDate, 
            opponent: formData.opponent, 
            series: formData.series, 
            batting: { 
                position: formData.position, 
                runs: parseInt(formData.runs), 
                ballsFaced: formData.ballsFaced 
            }, 
            bowling: { 
                overs: parseFloat(formData.overs), 
                runsConceded: parseInt(formData.runsConceded), 
                wickets: parseInt(formData.wickets) 
            }, 
            fielding: { 
                catches: parseInt(formData.catches), 
                runOuts: parseInt(formData.runOuts), 
                stumpings: parseInt(formData.stumpings) 
            } 
        }; 
        const requestData = { id: formData.id, matchType: formData.matchType, newMatch }; 
        try { 
             await axios.post(`${apiUrl}/update-matches`, requestData); 
            //const response = await axios.post('https://downtowndynamitz.vercel.app/update-matches', requestData); 
            setIsModalOpen(true);
            Clearfields();
        } catch (error) { 
            console.error('Error updating data:', error.response ? error.response.data : error.message); 
        }
    }
    const closeModal = () => { 
        setIsModalOpen(false); 
    };
    return(
        <>
        <form onSubmit={InsertData}>
        <div className='admin'>
           
            <div className='section section1'>
            <h3>Add Match Details by Player </h3>
            <div className="playerSelection">
            
                <label>Select a Player: </label>
                
                <select name="id" onChange={GetResults} className='rndCorners' required>
                <option key="0">Select a Player</option>
                    {playerslist.map((playerid) => (
                        <option key={playerid.id} value={playerid.id}>{playerid.name}</option>
                    ))}
                    
                </select>
                
                <label>Name: </label><input type='text' name="playerid" value={selectedKey.name} className='rndCorners'  disabled/>
            </div>
            </div>
            <div className='section'>
            <h3>Tournment</h3>
            <div className='addSection'>
               
                <select className='rndCorners' name="matchType" id="ttype" required value={formData.matchType} onChange={TournmentType}>
                <option value="Select">Select</option>
                    <option value="huplmatches">HUPL Tournment</option>
                    <option value="bthmatches">BTH Tournment</option>
                </select>
                
                {ttype === "huplmatches" ? (
                    <>
                    <label>Date : </label>
                    <select name="matchDate" id="matchDate" className='rndCorners'   onChange={GetOpponent} required>
                        <option>Date </option>
                        {tournament1.matches.map((match, idx) => { 
                            const matchDate = new Date(match.date); 
                            if (currentDate > matchDate) { 
                                return ( <option key={idx} value={matchDate.toLocaleDateString()}>{matchDate.toLocaleDateString()}</option> ); 
                            } 
                            return null; 
                        })}
                        
                    </select>
                    <label>Match ID : </label><input type="number" name="matchId" id="matchId" value={selectedMatchId}  disabled className='rndCornerssmall' /> 
                    <label>Opponent : </label>
                    <select className='rndCorners' name="opponent"  id="opponent" required onChange={HandleMainData} >
                        <option>Select Opponent</option>
                        <option value={opponents}>{opponents}</option>
                    </select>
                    
                    </>
                ) : null }
                {ttype === "bthmatches" ? (
                    <>
                    <label>Date : </label>
                    <select name="matchDate" id="matchDate" className='rndCorners' required  onChange={GetOpponent} >
                        <option>Date</option>
                        {tournament2.matches.map((match, idx) => { 
                            const matchDate = new Date(match.date); 
                            if (currentDate > matchDate) { 
                                return ( <option key={idx} value={matchDate.toLocaleDateString()}>{matchDate.toLocaleDateString()} </option> ); 
                            } 
                            return null; 
                        })}
                    </select>
                    <label>Match ID : </label><input type="number" name="matchId" id="matchId" value={selectedMatchId}  disabled className='rndCornerssmall' /> 
                    <label>Opponent : </label>
                    <select className='rndCorners' name="opponent" id="opponent" required onChange={HandleMainData}>
                        <option>Select Opponent</option>
                        <option value={opponents}>{opponents}</option>
                    </select>
                    
                    </>
                    ) : null
                }
                
            </div>
            </div>
            <div className="section">
            <h3>Batting Section</h3>
            <div className='addBattingSection'>
               
                <input type='text' name="position" value={formData.position} className='rndCorners' placeholder='Position' required onChange={HandleMainData} />
                <input type='text' name="runs" value={formData.runs} className='rndCorners' placeholder='Runs Scored' required onChange={HandleMainData} />
                <input type='text' name="ballsFaced" value={formData.ballsFaced} className='rndCorners' placeholder='Balls Taken' required onChange={HandleMainData}/>
            </div>
            </div>
            <div className="section">
            <h3>Bowling Section</h3>
            <div className='addBowlingSection'>
               
                <select name="overs" className='rndCorners' required onChange={HandleMainData} value={formData.overs}>
                    <option>Overs Bowled</option>
                    <option key="0" value="0">0</option>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                </select>
                <input type='text' name="runsConceded" value={formData.runsConceded} className='rndCornerssmall' placeholder='Runs Conceeded' required onChange={HandleMainData} />
                
                <select name="wickets" className='rndCorners' required onChange={HandleMainData} value={formData.wickets}>
                    <option>Wickets Taken</option>
                    <option key="0" value="0">0</option>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                    <option key="5" value="5">5</option>
                    <option key="6" value="6">6</option>
                    <option key="7" value="7">7</option>
                    <option key="8" value="8">8</option>
                    <option key="9" value="9">9</option>
                    <option key="10" value="10">10</option>
                </select>
            </div>
            </div>
            <div className="section">
            <h3>Fielding Section</h3>
            <div className='addFieldingSection'>
                
                <select name="catches" className='rndCorners' required onChange={HandleMainData} value={formData.catches}>
                    <option>Catches</option>
                    <option key="0" value="0">0</option>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                    <option key="5" value="5">5</option>
                    <option key="6" value="6">6</option>
                    <option key="7" value="7">7</option>
                    <option key="8" value="8">8</option>
                    <option key="9" value="9">9</option>
                    <option key="10" value="10">10</option>
                </select>
                
                <select name="runOuts" className='rndCorners' required onChange={HandleMainData} value={formData.runOuts}>
                    <option>Run Outs</option>
                    <option key="0" value="0">0</option>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                    <option key="5" value="5">5</option>
                    <option key="6" value="6">6</option>
                    <option key="7" value="7">7</option>
                    <option key="8" value="8">8</option>
                    <option key="9" value="9">9</option>
                    <option key="10" value="10">10</option>
                </select>
              
                <select name="stumpings" className='rndCorners' required onChange={HandleMainData} value={formData.stumpings}>
                    <option>Stumps</option>
                    <option key="0" value="0">0</option>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                    <option key="5" value="5">5</option>
                </select>
            </div>
            </div>
            <div class="button-container">
            <div>
                <button  className='btnfunc' type="submit" >Submit</button>
                <button  className='btnfunc' type="button" onClick={Clearfields}>Reset</button>
            </div>
            </div>
        </div>
        </form>
        <Modal className="modal"
            isOpen={isModalOpen} onRequestClose={closeModal}
            contentLabel='Sucess Modal'
            style={{ content: { width: '300px', height: '100px', margin: 'auto', padding: '20px', border: '2px solid #ccc',backgroundColor: 'grey', borderRadius: '10px' } }}
            >
        <h2>Data updated Successfully</h2>
        <button onClick={closeModal}>Close</button>
        </Modal>
    </>
    );
};  

export default Admin; 