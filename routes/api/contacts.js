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

const {
  addAndUpdateValidation,
  authMiddleware,
} = require("../../middlewares/");

const router = express.Router();

router.use(authMiddleware);

router
  .route("/")
  .get(asyncWrapper(getContactsController))
  .post(
    addAndUpdateValidation(joiContactSchema),
    asyncWrapper(addContactController)
  );

router
  .route("/:contactId")
  .get(asyncWrapper(getContactByIdController))
  .delete(asyncWrapper(removeContactController))
  .put(
    addAndUpdateValidation(joiContactSchema),
    asyncWrapper(updateContactController)
  );

router.patch(
  "/:contactId/favorite",
  addAndUpdateValidation(joiFavoriteSchema),
  asyncWrapper(updateStatusContactController)
);

module.exports = { contactsRouter: router };
