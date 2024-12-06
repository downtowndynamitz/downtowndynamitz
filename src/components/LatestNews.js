import {React,  useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './Admin.css'
const LatestNews = () => {
    const [latestNews, setLatestNews] = useState(Array(5).fill(''));
    const [keyPlayers, setKeyPlayers] = useState(Array(5).fill(''));
    const [latesttemplate, setlatesttemplate] = useState(Array(5).fill(''));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = async() => {
        const datalatestnews = {
            latesttemplate: latesttemplate,
            latestNews: latestNews,
            keyPlayers: keyPlayers
        };

        try { 
            const response = await axios.post('http://localhost:5000/update-news', datalatestnews); 
            setIsModalOpen(true);
            Clearfields();
        } catch (error) { 
            console.error('Error updating data:', error.response ? error.response.data : error.message); 
        }
    };

    const handleLatestNewsChange = (index, value) => {
        const news = [...latestNews];
        news[index] = value;
        setLatestNews(news);
    };

    const handleKeyPlayersChange = (index, value) => {
        const players = [...keyPlayers];
        players[index] = value;
        setKeyPlayers(players);
    };

    const handleTemplateChange = (index, value) => {
        const template = [...latesttemplate];
        template[index] = value;
        setlatesttemplate(template);
    };

    const Clearfields = () => {
        setLatestNews(Array(5).fill(''))
        setKeyPlayers(Array(5).fill(''))
        setlatesttemplate(Array(5).fill(''))
    };
    const closeModal = () => { 
        setIsModalOpen(false); 
    };
    return (
        <>
        <div className='admin'>
           
            <div className='section '>
            <div className="latest-template">
                <h3>Latest Template</h3>

                {latesttemplate.map((template, index) => (
                    <div key={index}>
                        <label>{`Template ${index + 1}`}</label>
                        
                        <select  className='rndCornersBig' value={template} onChange={(e) => handleTemplateChange(index, e.target.value)}  required>
                            <option>Select a Template</option>
                            <option key="0" >Every player contributed to this remarkable win, showcasing the depth and resilience of the team. The fielding was exceptional, with key saves and run-outs that turned the game around. Downtown Dynamitz secures a thrilling victory against </option>
                            <option key="1" >Despite the outcome not being in our favor, the team showed tremendous grit and determination in their match against </option>
                            <option key="2" >Helped our team reach a commanding position with a Match winning knock from </option>
                            <option key="3" >A Decent & awesome crucial partneship from </option>
                            <option key="4" >Recently delivered an outstanding Bowling performance from </option>
                            <option key="5" >Best Suppotive bowling performance from  </option>
                            <option key="6">it's hard not to be in complete awe of the man who is quite simply one of the greatest bowler in the team none other than </option>
                            <option key="7">it's hard not to be in complete awe of the man who is quite simply one of the greatest Batstmen in the team none other than </option>
                            <option key="8">Downtown Dynamitz secures a thrilling victory against </option>
                            <option key="9">Outstanding Bowling Performance from  </option>
                            <option key="10">Nail bitting performance from </option>
                            <option key="11">Outstanding All rounder Performance from </option>
                        </select>
                    </div>
                ))}
            </div>
            

            <div className="weeklykey-players">
                <h3>Key Players</h3>
                {keyPlayers.map((player, index) => (
                    <div key={index}>
                        <label>{`Player ${index + 1}`}</label>
                        <input type="text" className='rndCornersBig' value={player} onChange={(e) => handleKeyPlayersChange(index, e.target.value)} />
                    </div>
                ))}
            </div>

            <div className="latest-news">
                <h3>Latest News</h3>

                {latestNews.map((news, index) => (
                    <div key={index}>
                        <label>{`News ${index + 1}`}</label>
                        <input type="text" className='rndCornersBig' value={news} onChange={(e) => handleLatestNewsChange(index, e.target.value)} />
                    </div>
                ))}
            </div>
            <div class="button-container">
            <div>
                <button  className='btnfunc' type="submit" onClick={handleSubmit}>Submit</button>
                <button  className='btnfunc' type="button" onClick={Clearfields}>Reset</button>
            </div>
            </div>
            
        </div>
        </div>
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

export default LatestNews;
