const multer = require('multer');
const path = require('path');

const pdfConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '..', '/uploads/chapterNotes'));
    },
    filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        callback(null, `pdf_${Date.now()}${ext}`);
    }
});

const isPDF = (req, file, callback) => {
    if (file.mimetype === 'application/pdf') {
        callback(null, true);
    } else {
        callback(new Error('Only PDF files are valid.'));
    }
};

const uploadPDF = multer({
    storage: pdfConfig,
    fileFilter: isPDF
});

module.exports = {
    uploadPDF
};
