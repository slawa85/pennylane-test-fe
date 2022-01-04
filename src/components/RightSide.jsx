import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Header, Title, Section } from '../css/shared';

import { getRecipes, getRecipesPending } from '../reducers/selectors';
import { fetchRecipes as fetchRecipesRequest } from '../actions/api';
import Recipe from './Recipe';

class RightSide extends Component {
    static propTypes = {
        pending: PropTypes.bool,
        recipes: PropTypes.arrayOf(PropTypes.any),
    };

    static defaultProps = {
        pending: false,
        recipes: []
    };

    render() {
        const { recipes, pending } = this.props;

        return(
            <Fragment>
                <Header>
                    <Title>
                        <h1 className='align-items-center'>
                            PennyCooking
                        </h1>
                    </Title>
                </Header>
                <Section>
                    <div className='wrapper'>
                        <div className='wrapper-grid'>
                            {recipes.map((item) => {
                                return <Recipe data={item}/>;
                            })}
                        </div>
                    </div>
                </Section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    pending: getRecipesPending(state),
    recipes: getRecipes(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRecipes: fetchRecipesRequest
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightSide);
