const root = document.getElementById("root")

function AddItem(add){
    const container = document.createElement("form")

    const html = `<input type='text' placeholder='to do' />
    <button> Submit </button>
    `    
    container.innerHTML = html

    
    container.addEventListener("submit", (e) => {
        let input = container.querySelector("input").value
        e.preventDefault()
        add(input)
    })

    return container
}



function ListItem(arr, change){
    const container = document.createElement("div")
    
    let html = `
        <label>
            <input type="checkbox" ${ arr.status ? "checked" : ""}/> ${arr.text}
        </label>
    `
    container.innerHTML =html
    const input = container.querySelector("input")
    input.addEventListener("change", (e) => {
        e.preventDefault()
        change(e.target.checked) 
    })
    return container
}   


function List(arr, relod){
    const container = document.createElement("div")
    // debugger
    arr.map(item => {
        return ListItem(item, (changed) => {
            item.status = changed
            relod()
        })
    }).forEach(el => {

        container.append(el)
    });

    return container
}

function ListFooter(arr, clear){
    const container = document.createElement("footer")
    
    const comelted = arr.filter(item => item.status === true)

    const html = `
        ${comelted.length} / ${arr.length} Completed 
        <button> Clear Completed </button>
    `
    container.innerHTML = html
    const button = container.querySelector("button")
    button.addEventListener("click", () => {
        clear(arr.filter(todo => todo.status === false))
    })

    return container
}

function App(){
    // root.innerHTML = ""
    const container = document.createElement("div")
    let list = [
        {text: "JS", status: false},
        {text: "Node JS", status: false},
        {text: "React JS", status: false},
    ]
    
    function render(){    
        container.innerHTML = ""
        container.append(AddItem((newtext) => {
            list.push({text: newtext, status: false})
            render()
        }))
        container.append(List(list, () => {
            render()
        }))
        container.append(ListFooter(list, (arr)=>{
            list = arr
            render()
        }))
    }
    render()
    
    return container
}

root.append(App())
