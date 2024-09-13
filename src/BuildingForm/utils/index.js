const buildQueryVariables = (building = {}, units = []) => {
  const variables = {};
  const { id, address1 } = building;
  const where = {};
  if (id) {
    where.id = parseInt(id);
  } else {
    where.address1 = address1;
  }
  const updatedBuilding = { ...building };
  const createdBuilding = { ...building };
  variables.update = updatedBuilding;
  variables.create = createdBuilding;
  variables.where = where;
  createdBuilding.units = {};
  createdBuilding.units.createMany = {};
  createdBuilding.units = { createMany: { data: [] } };
  updatedBuilding.units = {};
  updatedBuilding.units.createMany = {};
  updatedBuilding.units = { createMany: { data: [] } };
  if (units.length) {
    createdBuilding.units.createMany.data = units
      .filter(({ deleted, id }) => !deleted && !id)
      .map((unit) => {
        delete unit.deleted;
        return unit;
      });
    updatedBuilding.units.createMany = {};
    updatedBuilding.units = { createMany: { data: [] } };
    if (units.some(({ deleted, id }) => id && deleted)) {
      updatedBuilding.units.deleteMany = units
        .filter(({ deleted, id }) => id && deleted)
        .map(({ id }) => {
          return { id };
        });
    }

    updatedBuilding.units.createMany.data = units
      .filter(({ deleted, id }) => !deleted && !id)
      .map((unit) => {
        delete unit.deleted;
        return unit;
      });
  }
  return variables;
};

export { buildQueryVariables };
