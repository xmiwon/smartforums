import React from 'react';
import './Settings.css'

const Settings = () => {
    return (
        <div className="settings-box">
         <form>
            <ul className="list">
                <div className="row">
                    <label className="paragraph">Dark mode</label>
                    <input className="options" type="checkbox" name="options" value="Dark"></input>              
                </div>
            </ul>

            <ul className="list">
            <div className="row">
                <label className="paragraph">Language</label>
                        <div className="optionsList">
                            <select className="selections">
                                <option value="0">Select:</option>
                                <option value="1">English</option>
                                <option value="2">Svenska</option>
                                <option value="3">中文</option>
                            </select>
                        </div>
            </div>
            </ul>

            <ul className="list">
               <div className="row">
               <label className="paragraph">Login and security</label>
               </div> 
            </ul>

            <ul className="list">
               <div className="row">
                <label className="paragraph">Password</label>
                <input className="password" type="button" name="password" value="Change password"></input>     
               </div> 
            </ul>

            <ul className="list">
               <div className="row">
                 <label className="paragraph">Delete account</label>
                 <input className="deactivate" type="button" name="deactivate" value="Delete"></input>     
               </div> 
            </ul>
        </form>
        </div>
    )
}

export default Settings; 