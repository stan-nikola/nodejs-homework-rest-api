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

const resizeAvatar = async (req, resp, next) => {
  try {
    const { path, filename } = req.file;

    const cropImg = await Jimp.read(path);
    cropImg.resize(250, 250).write(`${tempDir}/${filename}`);

    next();
  } catch (error) {
    next(new UnsupportedUploadFileError("File not supported, or exist"));
  }
};

module.exports = { uploadMiddleware, resizeAvatar };
