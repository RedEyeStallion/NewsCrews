import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.belongsTo('buzzfeed')
});
