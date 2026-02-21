// import { UploadDropzone } from '@/lib/uploadthing'
// import React from 'react'

// function UploadImg() {
// 	return (
// 		<div>
// 			<UploadDropzone
// 				className='h-[210px] w-full cursor-pointer text-white'
// 				config={{ appendOnPaste: true, mode: 'auto' }}
// 				appearance={{
// 					container: {
// 						border: '1px dotted pink',
// 					},
// 					uploadIcon: {
// 						color: 'pink',

// 						fontSize: '50px', // 👈 ikonkani kattalashtirish
// 						width: '50px', // optional
// 						height: '50px', // optional
// 					},
// 				}}
// 				endpoint='imageUploader'
// 				onClientUploadComplete={res => {
// 					console.log(res)
// 				}}
// 				onUploadError={error => {
// 					console.error('Upload error:', error)
// 					alert('❌ Upload failed')
// 				}}
// 			/>
// 		</div>
// 	)
// }

// export default UploadImg
import { UploadDropzone } from '@/lib/uploadthing'
import React from 'react'

function UploadImg() {
	return (
		<UploadDropzone
			className='h-[210px] w-full cursor-pointer text-white'
			config={{ appendOnPaste: true, mode: 'auto' }}
			appearance={{
				container: {
					border: '1px dotted pink',
					color: 'white', // 🔹 bu barcha container ichidagi text rangini oq qiladi
					backgroundColor: 'rgba(255,255,255,0.05)', // optional glass feel
				},
				uploadIcon: {
					color: 'white',
					fontSize: '50px',
					width: '50px',
					height: '50px',
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
	)
}

export default UploadImg
