export const transformations: any[] = [{
	name: 'Documento de Word',
	icon: 'file-word',
	color: 'blue',
	fileExtensions: ['doc', 'docx'],
	fileTypes: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
}, {
	name: 'Video',
	icon: 'file-video',
	color: 'orange',
	fileExtensions: ['mp4', 'wma', 'wmv', 'avi', 'ogg'],
	fileTypes: ['video/webm', 'video/mp4', 'video/ogg', 'video/avi']
}, {
	name: 'Audio',
	icon: 'file-audio',
	color: 'cyan',
	fileExtensions: ['mp3', 'mp4', 'flac', 'ogg'],
	fileTypes: ['audio/mp3', 'audio/mp4', 'audio/ogg']
}, {
	name: 'Documento de Excel',
	icon: 'file-excel',
	color: 'green',
	fileExtensions: ['xls', 'xlsx', 'xlsm'],
	fileTypes: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
}, {
	name: 'Pdf',
	icon: 'file-pdf',
	color: 'red',
	fileExtensions: ['pdf'],
	fileTypes: ['application/pdf']
}, {
	name: 'Imagen',
	icon: 'file-image',
	color: 'purple',
	fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'raw'],
	fileTypes: ['image/jpg', 'image/png', 'image/gif']
}, {
	name: 'Carpeta comprimida',
	icon: 'file-archive',
	color: 'dark-gray',
	fileExtensions: ['zip', 'rar'],
	fileTypes: ['application/zip', 'application/x-rar-compressed']
}, {
	name: 'Documento de Powerpoint',
	icon: 'file-powerpoint',
	color: 'orange',
	fileExtensions: ['ppt', 'pptx'],
	fileTypes: ['application/vnd.ms-powerpoint']
}, {
	name: 'Documento de texto',
	icon: 'file-alt',
	color: 'black',
	fileExtensions: ['txt', 'csv'],
	fileTypes: []
}, {
	name: 'Archivo de codigo',
	icon: 'file-code',
	color: 'amber',
	fileExtensions: ['html', 'css', 'js', 'scss', 'c', 'cpp'],
	fileTypes: ['text/html', 'text/css', 'application/javascript', 'text/javascript']
}];