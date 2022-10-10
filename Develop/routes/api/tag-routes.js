const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
{
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: { include: ['product_data'] }
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
};

router.get('/:id', (req, res) => {
  Tag.findOne({
    attributes: { include: ['product_data'] },
    where: {
      id: req.params.id
    }
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }),
  });
});

router.post('/', (req, res) => {
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
