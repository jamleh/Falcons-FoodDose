import React from 'react';
// import '../../rest-toDelete/Shiekhaljabal/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css'
// import Logout from '../logout/logout.js'
import Category from './Category';
// import Title from '../../rest-toDelete/Title/title'



class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        this.getCategories()
    }
    getCategories = () => {
        fetch('/categories/getCategories')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ categories: data.categories })
            })
    }

    render() {
        const { categories } = this.state
        return (
            <div class='categories'>
                {
                    categories? categories.map( (categ , i) => <Category category={categ} key={i} /> ):<div></div>
                }
            </div>
        );
    }
}


export default Home;