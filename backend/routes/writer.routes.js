module.exports = app => {
    const writers = require("../controllers/writer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Writer
    router.post("/", writers.create);
  
    // Retrieve all Writers
    router.get("/", writers.findAll);
  
    // Retrieve a single Writer with id
    router.get("/:id", writers.findOne);
  
    // Update a Writer with id
    router.put("/:id", writers.update);
  
    // Delete a Writer with id
    router.delete("/:id", writers.delete);

    // Delete all Writers
    router.delete("/", writers.deleteAll);

    app.use('/api/writers', router);
};