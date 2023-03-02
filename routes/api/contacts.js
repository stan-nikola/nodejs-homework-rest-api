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

router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactByIdController));

router.delete("/:contactId", asyncWrapper(removeContactController));

router.post(
  "/",
  addAndUpdateValidation(joiContactSchema),
  asyncWrapper(addContactController)
);

router.put(
  "/:contactId",
  addAndUpdateValidation(joiContactSchema),
  asyncWrapper(updateContactController)
);
router.patch(
  "/:contactId/favorite",
  addAndUpdateValidation(joiFavoriteSchema),
  asyncWrapper(updateStatusContactController)
);

module.exports = { contactsRouter: router };
