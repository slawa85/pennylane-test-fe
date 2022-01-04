import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getIngredients,getIngredientsPending } from '../reducers/selectors';
import {
    fetchIngredients as fetchIngredientsRequest,
    fetchRecipes as fetchRecipesRequest
} from '../actions/api';

import {Header, Title, Section} from '../css/shared';
import Ingredient from './Ingredient';

class LeftSide extends Component {
    static propTypes = {
        fetchIngredients: PropTypes.func.isRequired,
        fetchRecipes: PropTypes.func.isRequired,
        pending: PropTypes.bool,
        ingredients: PropTypes.arrayOf(PropTypes.any),
    };

    static defaultProps = {
        pending: false,
        ingredients: []
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedIngredients: []
        };

        this.selectIngredient = this.selectIngredient.bind(this);
    }

    async componentDidMount () {
        const { fetchIngredients } = this.props;
        fetchIngredients();
    }

    selectIngredient(element) {
        let { selectedIngredients } = this.state;
        const el = element.target;

        if (el.className === 'btn btn-light') {
            el.className = 'btn btn-success';
            selectedIngredients.push(el.id);
        }else {
            el.className = 'btn btn-light';
            selectedIngredients = selectedIngredients.filter(e => e !== el.id);
        }

        this.setState({ selectedIngredients });
    }

    render() {
        const { ingredients, pending, fetchRecipes } = this.props;

        return (<Fragment>
            <Header>
                <Title>
                    <h1 className='align-items-center'>Ingredients</h1>
                </Title>
            </Header>
            <Section>
                <div className='wrapper-fixed-group'>
                    <div className='section-block'>
                        {ingredients.map((item) => {
                            return <Ingredient data={item} onClick={this.selectIngredient}/>;
                        })}
                    </div>
                </div>
                <button type="button" className="btn btn-primary fixed" onClick={() => fetchRecipes(this.state.selectedIngredients)}>Get recipes</button>
            </Section>
        </Fragment>);
    }

}

const mapStateToProps = (state) => ({
    pending: getIngredientsPending(state),
    ingredients: getIngredients(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchIngredients: fetchIngredientsRequest,
    fetchRecipes: fetchRecipesRequest
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftSide);
