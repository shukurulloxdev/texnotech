import { UploadDropzone } from '@/lib/uploadthing'
import React from 'react'

function UploadImg() {
	return (
		<UploadDropzone
			className='h-[210px] w-full cursor-pointer'
			config={{ appendOnPaste: true, mode: 'auto' }}
			appearance={{
				container: {
					border: '1px dotted pink',
					color: 'white', // 🔹 barcha text oq bo‘ladi
					backgroundColor: 'rgba(255,255,255,0.05)',
				},
				uploadIcon: {
					color: 'white',
					fontSize: '10px',
					width: '80px',
					height: '80px',
				},
				button: {
					backgroundColor: 'blue', // optional
					color: 'white',
					padding: '10px',
				},
			}}
			endpoint='imageUploader'
			onClientUploadComplete={res => {
				console.log(res)
			}}
			onUploadError={error => {
				console.error('Upload error:', error)
				alert('❌ Yuklash muvaffaqiyatsiz')
			}}
		/>
	)
}

export default UploadImg
