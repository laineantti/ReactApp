import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import RecipeReviewCard from '../components/ComplexCard'

function Content() {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = () => {
        setIsLoading(true)
        fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setIsLoading(false)
                setNews(data)
                console.log(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return isLoading ?
        <p>Loading...</p>
        :
        <>
            <Typography color="textPrimary" variant="h1" component="div" gutterBottom>Naatti News</Typography>
            {
                news.totalResults > 0 && (
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        {news.articles.map((article, i) => <Grid item xs={1} sm={4} md={3} key={i}>
                            <RecipeReviewCard
                                source={article.source} // { id, name }
                                author={article.author !== null ? article.author : "Anonymous"}
                                title={article.title}
                                description={article.description}
                                url={article.url}
                                urlToImage={article.urlToImage}
                                publishedAt={article.publishedAt.slice(0, 10)}
                                content={article.content}
                            />
                        </Grid>)}
                    </Grid>
                )
            }
        </>
};

export default Content;