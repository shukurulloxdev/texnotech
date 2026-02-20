import { UploadDropzone } from '@/lib/uploadthing'
import React from 'react'

function UploadImg() {
	return (
		<div>
			<UploadDropzone
				className='h-[210px] w-full cursor-pointer text-white'
				config={{ appendOnPaste: true, mode: 'auto' }}
				appearance={{
					container: {
						border: '1px dotted pink',
					},
					uploadIcon: {
						color: 'white',
						fontSize: '60px', // 👈 ikonkani kattalashtirish
						width: '50px', // optional
						height: '50px', // optional
					},
				}}
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					console.log(res)
				}}
				onUploadError={error => {
					console.error('Upload error:', error)
					alert('❌ Upload failed')
				}}
			/>
		</div>
	)
}

export default UploadImg
