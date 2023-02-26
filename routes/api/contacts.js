const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");
const { joiSchema, favoriteJoiSchema } = require("../../models");

const { addAndUpdateValidation } = require("../../middlewares/");

const router = express.Router();

router.get("/", asyncWrapper(listContacts));

router.get("/:contactId", asyncWrapper(getContactById));

router.post("/", addAndUpdateValidation(joiSchema), asyncWrapper(addContact));

router.delete("/:contactId", asyncWrapper(removeContact));

router.put(
  "/:contactId",
  addAndUpdateValidation(joiSchema),
  asyncWrapper(updateContact)
);
router.patch(
  "/:contactId/favorite",
  addAndUpdateValidation(favoriteJoiSchema),

  asyncWrapper(updateStatusContact)
);

module.exports = { contactsRouter: router };
