import React from 'react';
// import { Link } from 'react-router-dom';



const Home = (props) => {

    return (
        <>
            <nav>
                <div id="header">

                </div>
                <button className='btnHome' onClick={props.logout_func}>Logout</button>
            </nav>
            <div className="mainContainer">
                <h1 className="h1-hero">Public Holidays</h1>
                <div className="text-hero">Retrieve Public Holidays for Ghana and Germany for any specific year.</div>
                <div className="containerHolder card">
                    <div className="select">
                        <select className="form-control" onChange={(event) => props.handleChange({ "field": "country", "value": event.target.value })}>
                            <option>Countries</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                        </select>
                    </div>
                    <div className="select">
                        <select className="form-control" onChange={(event) => props.handleChange({ "field": "year", "value": event.target.value })}>
                            <option>Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className="select">
                        <select className="form-control" onChange={(event) => props.handleChange({ "field": "month", "value": event.target.value })}>
                            <option>Month</option>
                            <option value="any">Any Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                    <div className="select">
                        <select className="form-control" onChange={(event) => props.handleChange({ "field": "day", "value": event.target.value })}>
                            <option>Day</option>
                            <option value="any">Any Day</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                   
                    <button className='btnHome' onClick={props.holiday}>Test</button>
                </div>
                <div className="containerHolder card">
                    <div className="insideContainer">
                    <br />
                    {
                            props.holidays ?
                                props.holidays.map((data, i) => {
                                    return (
                                        <span key={i}>
                                            <h2 className='data'>Name: {data.name}</h2>
                                            <h2 className='data'>Country: {data.country}</h2>
                                            <h2 className='data'>Location: {data.location}</h2>
                                            <h2 className='data'>Date: {data.date}</h2>
                                            <h2 className='data'>Type: {data.type}</h2>
                                            <h2 className='data'>Week_Day: {data.week_day}</h2>
                                            <br /><br />
                                        </span>
                                    );
                                })
                                : null
                        }
                    </div>
                </div>
            </div>
            <footer>
                <p>Created by Linda Kumah</p>
            </footer>
        </>
    )
}

export default Home;