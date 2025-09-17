import { useState } from "react"

function CircleTask() {
    const [circles, setCircles] = useState([])
    function createCircle() {
        setCircles([...circles, {
            id: Math.trunc(Math.random() * 100000),
            isSelected: false
        }])
    }
    function selectCircle(id) {
        let updatedCircle = circles.map(ele => {
            if (ele.id == id) {
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircles(updatedCircle)
    }
    function deleteCircle() {
        let notSelectedCircles = circles.filter((ele) => !ele.isSelected)
        setCircles(notSelectedCircles)
    }
    return (
        <>
            <div>
                <button onClick={createCircle}>Create Circle</button>
                <button onClick={deleteCircle}>Delete Circle</button>
            </div>
            <div>
                <h1>total no circles :{circles.length}</h1>
                <h1>total no selected circles :{circles.filter((ele) => ele.isSelected).length}</h1>
            </div>
            <div style={{ margin: "10px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {
                    circles.map((ele) => {
                        return <div onClick={() => selectCircle(ele.id)} style={{
                            height: "150px", borderRadius: "50%", background: ele.isSelected ? "red" : "green",
                            width: "150px", boxShadow: "0 0 5px black"
                        }}>
                        </div>
                    })
                }
            </div >
        </>
    )
}
export default CircleTask