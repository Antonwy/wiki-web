import React from 'react'
import posed from 'react-pose'

import SearchIcon from '../Images/search-icon.svg'

const Search = posed.div({
    visible: {
        width: "100vw",
        height: "15vw",
        y: "35vh",
        x: 0,
        borderRadius: 0,
        transition: {duration: 500},
    },
    hidden: {
        width: "15vw",
        height: "15vw",
        y: "35vh",
        x: "42.5vw",
        borderRadius: "50%",
        transition: {duration: 500},
    },
    top: {
        x: 0,
        y: 0,
        height: 100
    }
})

const SearchField = ({handleChange, submitInput, focused, handleChangeFocus, top}) => {

    let anim = focused ? "visible" : "hidden";

    if(focused && !top) {
        anim = "visible"
    }else if(focused && top){
        anim = "top"
    }

    return (
        <form className="searchField" onSubmit={submitInput}>
            <Search
                pose={anim}
                className="searchContainer"
                onClick={handleChangeFocus(true)}
                >
                {
                    focused ?
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Search The Free Encyclopedia..."
                        autoFocus
                    />
                    :
                    <img alt="search" src={SearchIcon}/>
                }
            </Search>
        </form>
    )
}

export default SearchField
