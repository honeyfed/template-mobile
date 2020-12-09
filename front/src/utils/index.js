export function getEquipmentType() {
  let equipmentType = '';
  const agent = navigator.userAgent.toLowerCase();
  const android = agent.indexOf('android');
  const iphone = agent.indexOf('iphone');
  const ipad = agent.indexOf('ipad');
  if (android !== -1) {
    equipmentType = 'android';
  } else if (iphone !== -1 || ipad !== -1) {
    equipmentType = 'ios';
  } else {
    equipmentType = 'other';
  }
  return equipmentType;
}

// // 兼容手机没有摄像头选项
// getCapture () {
//   let equipmentType = this.$utils.getEquipmentType()
//   let capture = {}
//   switch (equipmentType) {
//     case 'ios':
//       capture = {}
//       break
//     case 'android':
//       capture = {
//         capture: 'camera'
//       }
//       break
//     case 'other':
//       capture = {}
//       break
//     default:
//       capture = {}
//       break
//   }
//   return capture
// }
