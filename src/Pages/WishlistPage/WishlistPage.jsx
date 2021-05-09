import React, { useEffect, useState } from 'react'
import EmptyWish from '../../Components/EmptyWish/EmptyWish';
import Pagination from '../../Components/Pagination/Pagination';
import WishCard from '../../Components/WishCard/WishCard';
import { useAuth } from '../../Context/context'
import { getPopulatedWishlist } from '../../utils/wishlist.util.jsx';
import { useLoading, ThreeDots } from '@agney/react-loading';
import './wishlistPage.css'

function WishlistPage() {

    const { authState: { currentUserId } } = useAuth();
    const [loading, setLoading] = useState(true);
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        getPopulatedWishlist(currentUserId, setLoading)
            .then(response => {
                setWishlistItems(response)
            })
    }, [])

    const { containerProps, indicatorEl } = useLoading({
        loading: loading,
        indicator: <ThreeDots width="50" />
    });

    return (
        <div className="common-wrapper">
            <Pagination />
            {loading && <section className='product-loader desc-loader' {...containerProps}>{indicatorEl}</section>}
            {!loading && <div className="wishlist-page">
                {wishlistItems.length !== 0 &&
                    <>
                        <div className="head">
                            Your Wishlist
                        </div>
                        <div className="wishlist">
                            <div className="wish-grid">
                                {
                                    wishlistItems.map(wish => {
                                        return (
                                            <div key={wish._id}>
                                                <WishCard wish={wish} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }
                {wishlistItems.length === 0 && <EmptyWish />}
            </div>}
        </div>
    )
}

export default WishlistPage
