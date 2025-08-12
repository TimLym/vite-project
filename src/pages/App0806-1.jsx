import '../css/app0806-1.css'

const App = () => {
    // 資料抽離
    const photos ={
        photo1: {
            imgURL:"https://images.unsplash.com/photo-1751283246779-cb72aa04250b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
            title:"Beach",
            desc:"Sunset",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1751283246779-cb72aa04250b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
        },
        photo2: {
            imgURL:"https://images.unsplash.com/photo-1754147388519-212180791a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
            title:"Street",
            desc:"night",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1754147388519-212180791a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
        },
        photo3: {
            imgURL:"https://images.unsplash.com/photo-1754273844587-f6071584597b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
            title:"Moutain",
            desc:"morning",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1754273844587-f6071584597b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
        }
    }

    return (
        <div className='container'>
            <div className="card">
                <img src={photos.photo1.btnURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
            </div>
            <div className="card">
                <img src={photos.photo2.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
            </div>
            <div className="card">
                <img src={photos.photo3.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
            </div>
        </div>
    )
}

export default App