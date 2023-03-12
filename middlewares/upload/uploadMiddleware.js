const multer = require("multer");
const path = require("path");
const Jimp = require("jimp");
const fs = require("fs");

const { UnsupportedUploadFileError } = require("../../helpers");

const tempDir = path.join(__dirname, "../../", "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2048,
  },
});

const uploadMiddleware = multer({ storage: multerConfig });

const cropImageMiddleware = async (req, resp, next) => {
  if (!req.file) {
    next(new UnsupportedUploadFileError("File not provided"));
    return;
  }

  const { path: filePath, filename } = req.file;

  try {
    const cropImgDir = path.join(tempDir, filename);

    const cropImg = await Jimp.read(filePath);

    cropImg.resize(250, 250).quality(60).write(cropImgDir);

    next();
  } catch (error) {
    fs.unlink(filePath, (err) => {
      if (err) next(new Error(err));
    });
    next(new UnsupportedUploadFileError("File type unsupported"));
  }
};

module.exports = { uploadMiddleware, cropImageMiddleware };
