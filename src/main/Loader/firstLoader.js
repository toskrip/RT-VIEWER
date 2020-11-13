import dicomParse from "../dicomParse";
import dicomParser from "dicom-parser";
import Hammer from "hammerjs";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneMath from "cornerstone-math"
import * as cornerstoneWadoImageLoader from "cornerstone-wado-image-loader"
import voxelCal from "../RT_STRUCTURE/pixel2voxel";
import {structFile, reset, getImage, sendDrawImage} from "../RT_STRUCTURE/drawROI";
import {doseFile} from "../RT_DOSE/doseDataParser";
import {Dose_Checkbox, Dose_checkEvent} from "../RT_DOSE/doseCheckbox";
import {checkAndDraw} from "../RT_DOSE/drawDose";

cornerstoneWadoImageLoader.external.cornerstone = cornerstone
cornerstoneWadoImageLoader.external.dicomParser = dicomParser
cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath
cornerstoneTools.init();

let currentImageIndex = 62;

//Import a list of file names from a selected folder
function imageIdList(e) {
    let imageId = []; //image ID list from file name list
    let dumpFiles = [];
    let max = 1000000;
    /*
      let output = document.getElementById("listing");
      let files = e.target.files;

   // show file list
     for (let i=0; i<files.length; i++) {
         let item = document.createElement("li");
         item.innerHTML = files[i].webkitRelativePath;
         output.appendChild(item);
     };
    */
    let cnt = 0;

    for (let i = 0; i < max; i++) {
        dumpFiles[i] = e.target.files[i];
        imageId[i] = cornerstoneWadoImageLoader.wadouri.fileManager.add(dumpFiles[i]) //save file name in array

        if (cnt > max) {
            alert('ERROR : There are Too many files.');
        }
        cnt++;
    }

    //Index 111 : RT DOSE FILE
    //Index 112 : RT PLAN FILE
    //Index 113 : RT STRUCTURE FILE

    firstLoader(imageId, currentImageIndex);
    structFile(dumpFiles[113]);
    doseFile(dumpFiles[111]);

    let el = document.getElementById('dicomImage');
    el.onwheel = wheelE;

    function wheelE(e) {
        // Firefox e.detail > 0 scroll back, < 0 scroll forward
        // chrome/safari e.wheelDelta < 0 scroll back, > 0 scroll forward
        e.stopPropagation();
        e.preventDefault();
        let index = currentImageIndex;

        if (index >= 0 || index < imageId.length) {
            if (e.deltaY < 0) {
                if (index === currentImageIndex) {
                    updateTheImage(imageId, currentImageIndex + 1); //update images
                    reset();
                }
            } else {
                if (index === currentImageIndex) {
                    updateTheImage(imageId, currentImageIndex - 1); //update images
                    reset();
                }
            }
        } else {
            updateTheImage(imageId, currentImageIndex); //update images
            reset();
        }
        // Prevent page fom scrolling
        return false;
    }
}

let checkVal_check_dose = [];

function getCheckValue(checkVal_check) {
    checkVal_check_dose = checkVal_check;
}


let dose_value = [];

//calculate Dose value
function gridScaling(image, pixel_data, Rows, Columns, Number_of_Frames) {
    let Dose_Grid_Scaling;
    Dose_Grid_Scaling = image.data.string('x3004000e');
    Dose_Grid_Scaling = parseFloat(Dose_Grid_Scaling);
    let dose_value_temp = [];


    //초기화
    for (let i = 0; i < Number_of_Frames; i++) {
        dose_value_temp[i] = [];
    }

    //calculate dose value
    for (let i = 0; i < pixel_data.length; i++) {
        dose_value_temp[i] = pixel_data[i] * Dose_Grid_Scaling * 100*40;
    }

    let cnt = 0;

    for (let z = 0; z < Number_of_Frames; z++) {
        dose_value[z] = [];
    }
    for (let z = 0; z < Number_of_Frames; z++) {
        for (let xy = 0; xy < Rows * Columns; xy++) {
            dose_value[z][xy] = [];
        }
    }
    //convert array to 3 dimension
    for (let z = 0; z < Number_of_Frames; z++) {
        for (let y = 0; y < Columns; y++) {
            for (let x = 0; x < Rows; x++) {
                dose_value[z][y][x] = dose_value_temp[cnt];
                cnt++;
            }
        }
    }

    //find max dose value
    let max = []; //max dose z array
    for (let z = 0; z < Number_of_Frames; z++) {
        max[z] = (Math.max.apply(...dose_value[z]));
    }

    let dosemax = 0;
    dosemax = Math.max(...max); //dose max

    Dose_Checkbox(dosemax);
    Dose_checkEvent();
}


let img;

// show image #1 initially
function updateTheImage(imageIds, imageIndex) {
    let el = document.getElementById('dicomImage');
    cornerstone.enable(el)

    currentImageIndex = imageIndex;
    cornerstone.loadImage(imageIds[imageIndex]).then(function (image) {
        const viewport = cornerstone.getDefaultViewportForImage(el, image);
        if (image.data.string('x00080016') === '1.2.840.10008.5.1.4.1.1.2' || image.data.string('x00080016') === '1.2.840.10008.5.1.4.1.1.481.2') {
            cornerstone.displayImage(el, image, viewport);

            dicomParse(image);
            voxelCal(image);
            getImage(image);
            sendDrawImage(image);

            checkAndDraw(dose_value[currentImageIndex], checkVal_check_dose);

            img = image;
        } else {
            alert("ERROR: Confirm this image's modality : CT , MRI ... ");
        }
    });
    return img;
}


//load one CT Image from local file
function firstLoader(imageIds, imageIndex) {
    let el = document.getElementById('dicomImage');
    cornerstone.enable(el)
    cornerstone.loadImage(imageIds[imageIndex]).then(function (image) {
        const viewport = cornerstone.getDefaultViewportForImage(el, image);
        if (image.data.string('x00080016') === '1.2.840.10008.5.1.4.1.1.2' || image.data.string('x00080016') === '1.2.840.10008.5.1.4.1.1.481.2') {
            cornerstone.displayImage(el, image, viewport);

            dicomParse(image);
            voxelCal(image);
            getImage(image);
            sendDrawImage(image);

            //checkAndDraw(dose_value[imageIndex], checkVal_check_dose);

            getCheckValue([]);
            img = image;

        } else if (image.data.string('x0080016') === '1.2.840.10008.5.1.4.1.1.481.2') {
            alert('dose file')
        } else {
            alert("ERROR: Confirm this image's modality : CT , MRI ... ");
        }
    });
    return img;
}

export {firstLoader, imageIdList, gridScaling, getCheckValue}


