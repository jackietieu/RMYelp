import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestBusinesses } from '../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
  businesses: state.businesses,
  reviews: state.reviews,
  filters: {
    search: state.filters.search,
    filterId: ownProps.filterId
  },
  businessId: ownProps.businessId
});

const mapDispatchToProps = dispatch => ({
  requestBusinesses: (filters) => dispatch(requestBusinesses(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
