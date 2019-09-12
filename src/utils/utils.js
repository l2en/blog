export function _formatTime(time){
  let obj = {};
   obj.d = Math.floor(time / 86400);
   obj.h = Math.floor((time % 86400) / 3600);
   obj.m = Math.floor((time % 86400) % 3600 / 60);
   obj.s = Math.floor((time % 86400) % 3600 % 60);
return obj;
}