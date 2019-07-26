<template>
  <div>
    <div class="img-box">
      <img
        alt="example"
        v-bind:src="avatarSrc ? avatarSrc : defaultAvatarSrc"
        slot="cover"
      />
      <input
        type="file"
        ref="file"
        style="display: none"
        @change="onFileChange"
      />
      <a-icon class="avg-class" type="camera" @click="$refs.file.click()" />
      <a-icon class="avg-class" type="delete" @click="removeImg" />
    </div>
    <div class="modal-box">
      <a-modal
        title="Basic Modal"
        v-model="visible"
        @cancel="handleCancel"
        @ok="handleOk"
      >
        <div ref="CropperImg" id="resizer-demo"></div>
      </a-modal>
    </div>
  </div>
</template>

<script>
import Croppie from "croppie";
//import { Croppie } from 'croppie/croppie';
var resize;

var loadCropper = function(result) {
  var el = document.getElementById("resizer-demo");
  resize = new Croppie(el, {
    viewport: { width: 100, height: 100 },
    boundary: { width: 200, height: 200 },
    showZoomer: false,
    enableResize: true
    //enableOrientation: true,
    //mouseWheelZoom: "ctrl"
  });
  resize.bind({
    url: result
  });
};

export default {
  data() {
    return {
      visible: false,
      defaultAvatarSrc: "https://image.flaticon.com/icons/svg/74/74472.svg",
      avatarSrc: "https://image.flaticon.com/icons/svg/74/74472.svg"
    };
  },
  mounted: function() {
    let privousImg = localStorage.getItem("vueAvatarImgAsDataURL");
    if (privousImg) {
      this.avatarSrc = privousImg;
    }
  },
  methods: {
    handleCancel() {
      this.visible = false;
      resize.destroy();
    },
    handleOk() {
      resize.result("rawcanvas").then(blob => {
        var imgAsDataURL = blob.toDataURL("image/png");
        this.avatarSrc = imgAsDataURL;
        //this.avatarSrc = window.URL.createObjectURL(blob);
        this.visible = false;
        resize.destroy();
        try {
          localStorage.setItem("vueAvatarImgAsDataURL", imgAsDataURL);
        } catch (e) {
          //console.log("Storage failed: " + e);
        }
      });
    },
    onFileChange(e) {
      var reader = new FileReader();
      var fileObj = e.target.files || e.dataTransfer.files;
      reader.addEventListener(
        "load",
        () => {
          this.visible = true;
          setTimeout(() => {
            loadCropper(reader.result);
          }, 100);
        },
        false
      );
      if (fileObj && fileObj[0]) {
        reader.readAsDataURL(fileObj[0]);
      }
    },
    removeImg() {
      this.avatarSrc = "";
      localStorage.removeItem("vueAvatarImgAsDataURL");
    }
  }
};
</script>

<style>
.img-box {
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 0px 6px #ccc;
  width: 290px;
  position: relative;
}
.img-box img {
  width: 100%;
  background: #f5f5f5;
}
.avg-class {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 32px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #fff;
  border-radius: 50%;
}
.avg-class.anticon-delete {
  left: inherit;
  right: 10px;
}
</style>
