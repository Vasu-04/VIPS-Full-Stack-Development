import React, { useState } from 'react'
import "./TodoProject.css"




const TodoProject = () => {

    const [wishListValue, setWishListValue] = useState("");
    const wishlistInputChange = (event) => {
        setWishListValue(event.target.value)
    }

    const [wishlistList, setwishlistList] = useState([]);
    const addBtnClick = () => {
        const id = wishlistList.length == 0 ? 1 : wishlistList[wishlistList.length - 1].id + 1
        const newWish = {
            id: id,
            activity: wishListValue,
            status: false
        }
        setWishListValue("")
        setwishlistList([...wishlistList, newWish])
    }

    // const checkBoxChange = (id) => {             // direct mutation
    //     console.log(id)
    //     setwishlistList(
    //         wishlistList.filter((item) => {
    //             if (item.id === id) {
    //                 item.status = true;
    //             }
    //         })
    //     )
    // }

    const checkBoxChange = (id) => {
        setwishlistList(
            wishlistList.map((item) => {
                if (item.id === id) {
                    return { ...item, status: !item.status };
                }
                return item;
            })
        );
    }

    const deleteWish = (id) => {
        setwishlistList(
            wishlistList.filter((item) => {
                if (item.id !== id) {
                    return item;
                }
            })
        )
    }

    console.log(wishlistList)
    return (
        <div className='mainDiv'>
            <h1>Your WishList</h1>
            <div className='inputBar'>
                <input value={wishListValue} placeholder='Enter Wishlist...' onChange={wishlistInputChange}></input>
                <button onClick={addBtnClick}>Add</button>
            </div>
            <div className='wishlists'>
                {
                    (wishlistList.size != 0) ?
                        <ul>
                            {
                                wishlistList.map((wishList) => {
                                    return <li key={wishList.id}>
                                        <div className='wishListItem'>
                                            <div>
                                                <input type='checkbox' value={wishList.status} onChange={() => checkBoxChange(wishList.id)}></input>
                                                <p>{wishList.activity}</p>
                                            </div>
                                            <i className="fas fa-trash" onClick={() => deleteWish(wishList.id)}></i>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                        : <div></div>
                }
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default TodoProject
