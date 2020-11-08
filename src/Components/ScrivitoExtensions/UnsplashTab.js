import * as React from "react";
import * as Scrivito from "scrivito";
import axios from 'axios';
import Masonry from 'react-masonry-css'

class UnsplashTab extends React.Component {
    constructor(props) {
        super(props);
        this.widget = this.props.widget;
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEntries = this.handleChangeEntries.bind(this);
        this.imageClicked = this.imageClicked.bind(this);
        this.state = {
            imgs: [],
            value: '',
            image: '',
            page: 1,
            category: '',
            entries: 1,
        }
    }
    componentDidMount() {
        const keyword = this.widget.get('keyword') || 'business';

        axios.get(`https://api.unsplash.com/search/photos/?page=1&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`)
            .then(data => {
                console.log("data", data.data)
                this.setState({ imgs: data.data.results });

            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        const keyword = this.widget.get('keyword') || 'business';
        const category = event.target.value;
        this.setState({ category: category });
        this.setState({ entries: this.state.entries + 8 });
        const entries = this.state.entries;
        axios.get(`https://api.unsplash.com/search/photos/?per_page=${entries}&order_by=${category}&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`)
            .then(data => {

                this.setState({ imgs: data.data });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    };

    handleChangeEntries() {
        const keyword = this.widget.get('keyword') || 'it';
        this.setState({ page: this.state.page + 1 });
        const page = this.state.page;
        const category = this.state.category;

        axios.get(`https://api.unsplash.com/search/photos/?query=${keyword}&page=${page}&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`)
            .then(data => {
                this.setState({ imgs: this.state.imgs.concat(data.data.results) });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    };

    imageClicked(src, description) {
        const { widget } = this.props;
        widget.update({ image: src })

    };

    render() {
        const images = this.state.imgs;
        {

            return (
                <div>

                    <select onChange={this.handleChange} value={this.state.value}>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Popular</option>
                    </select>

                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">{images.map((el, index) =>
                            <img key={index} src={el.urls.small} onClick={() => this.imageClicked(el.urls.raw + "&w=2000&dpi=2", el.description)} />
                        )}
                    </Masonry>
                    <div className="text-center"><a className="btn btn-primary" onClick={this.handleChangeEntries}>Load more ...</a></div>
                </div>
            );
        };
    }
}



Scrivito.registerComponent("UnsplashTab", UnsplashTab);
