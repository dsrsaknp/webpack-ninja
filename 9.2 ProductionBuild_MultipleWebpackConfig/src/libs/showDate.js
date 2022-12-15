// import mnt from 'moment';

export function showDate() {
    console.log(mnt(new Date()).format('DD-MM-YYYY'));
}

export function dummyFunction() {
    console.log('Im a dum-dum function with tree shake');
};
