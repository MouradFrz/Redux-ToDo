import React from 'react';
import {FcOpenedFolder} from 'react-icons/fc'
function NoFolder(props) {
    return (
        <div className='w-full h-[100vh] dark:text-accent transition-all dark:bg-darkcent flex justify-center items-center flex-col'>
                <FcOpenedFolder className='text-[10rem]'/>
            Choose a folder from the sidebar
        </div>
    );
}

export default NoFolder;