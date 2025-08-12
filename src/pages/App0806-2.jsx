import Card from '../components/Cards'
import '../css/app0806-1.css'

const App = () => {
    // 資料抽離
    const photos =[
        {
            id:1,
            imgURL:"https://images.unsplash.com/photo-1751283246779-cb72aa04250b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
            title:"Beach",
            desc:"Sunset",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1751283246779-cb72aa04250b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            imgURL:"https://images.unsplash.com/photo-1754147388519-212180791a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
            title:"Street",
            desc:"night",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1754147388519-212180791a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            imgURL:"https://images.unsplash.com/photo-1754273844587-f6071584597b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
            title:"Moutain",
            desc:"morning",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1754273844587-f6071584597b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            imgURL:"https://images.unsplash.com/photo-1745172367007-a8481515e3b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
            title:"Snow",
            desc:"Afternoon",
            btnName:"Source",
            btnURL:"https://images.unsplash.com/photo-1754273844587-f6071584597b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <div className='container'>
            {photos.map((photo) =>{
                return <Card key={photo.id} imgURL={photo.imgURL} title={photo.title} desc={photo.desc} btnURL={photo.btnURL} btnName={photo.btnName}></Card>
            })}
        </div>
    )
}

export default App