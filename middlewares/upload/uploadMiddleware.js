const multer = require("multer");
const path = require("path");
const Jimp = require("jimp");

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
  try {
    const { path: filePath, filename } = req.file;

    const cropImgDir = path.join(tempDir, filename);

    const cropImg = await Jimp.read(filePath);
    cropImg.resize(250, 250).write(cropImgDir);

    next();
  } catch (error) {
    next(
      new UnsupportedUploadFileError("File type unsupported or not provided")
    );
  }
};

module.exports = { uploadMiddleware, cropImageMiddleware };
