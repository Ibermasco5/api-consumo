const Appliance = require('../models/appliance');

class ConsumptionController {
  static calculateConsumption(req, res) {
    try {
      const { appliances } = req.body;

      // Calculate the total consumption
      let totalConsumption = 0;
      appliances.forEach((appliance) => {
        const { name, consumption } = appliance;
        totalConsumption += consumption;
      });

      res.status(200).json({ totalConsumption });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = ConsumptionController;