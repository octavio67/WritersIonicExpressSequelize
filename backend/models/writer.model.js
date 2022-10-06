module.exports = (sequelize, Sequelize) => {
  const Writer = sequelize.define(
    "writer",
    {
      nombre: {
        type: Sequelize.STRING,
      },
      fechas: {
        type: Sequelize.STRING,
      },
      pais: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Writer;
};
