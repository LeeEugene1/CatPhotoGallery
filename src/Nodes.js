import Node from "./Node"
function Nodes(){
    const people = [
        {
            id:1,
            name:'yujin',
            age:30,
            skill:'React'
        },{
            id:2,
            name:'yumin',
            age:27,
            skill:'Angular'
        },{
            id:3,
            name:'john',
            age:29,
            skill:'Java'
        },
    ]
    const peopleList = people.map(person => <Node person={person}/>)
    return(
        <div>
            {peopleList}
        </div>
    )
}

export default Nodes