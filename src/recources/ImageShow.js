function ImageShow({image}) 
{
    return <div> 
        <img src={image.urls.full} alt={image.alt_description} />
    </div>

}

export default ImageShow;