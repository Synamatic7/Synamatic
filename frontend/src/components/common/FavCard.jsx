import React from 'react';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/red_heart.svg';
import { useDispatch } from 'react-redux';
import { deleteFavourite } from '../../reducks/favourites/operations';
import ImgArrow from '../../assets/img/arrow.png'
const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="moviebox mar10">
                <img class="movieposter" src={favourite.image} alt="" />
                <div class="moviedeets">
                    <div class="row spacer">
                        <div>
                            <img src={Imgstar} alt="" />
                            <span>4.6</span>
                            <span class="darken">/5</span>
                        </div>
                        <div class="trailersec row">
                            <img src={ImgArrow} alt="" />
                            <div class="btn-text">Trailer</div>
                        </div>
                    </div>
                </div>
                <div class="favit" onClick={() => dispatch(deleteFavourite(favourite.id))}>
                    <img src={ImgHeart} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FavCard;