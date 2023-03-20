const express = require("express");

const { asyncWrapper } = require("../../helpers");

const {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
} = require("../../controllers");

const { joiContactSchema, joiFavoriteSchema } = require("../../models");

const { validationMiddleware, authMiddleware } = require("../../middlewares/");

const router = express.Router();

router.use(authMiddleware);

router
  .route("/")
  .get(asyncWrapper(getContactsController))
  .post(
    validationMiddleware(joiContactSchema),
    asyncWrapper(addContactController)
  );

router
  .route("/:contactId")
  .get(asyncWrapper(getContactByIdController))
  .delete(asyncWrapper(removeContactController))
  .put(
    validationMiddleware(joiContactSchema),
    asyncWrapper(updateContactController)
  );

router.patch(
  "/:contactId/favorite",
  validationMiddleware(joiFavoriteSchema),
  asyncWrapper(updateStatusContactController)
);

module.exports = { contactsRouter: router };
