<template>
  <v-file-input
      v-bind="$props"
      class="custom__file-input"
      :class="{'full-width': loadImageIsFullWidth}"
      @update:modelValue="onLoad"
      accept="image/*,.png,.jpg,.jpeg,.web,.svg+xml"
  >
    <template v-slot:append>
      <div
          v-for="item in images"
          :key="item.lastModified"
          class="added__files"
      >
        <div class="added__files-delete-wrap">
          <div class="added__files-delete" @click="$emit('deleteFile', item.name)">
            <v-icon class="added__files-delete-icon" small>
              mdi-close
            </v-icon>
          </div>
        </div>

        <v-img
            :src="item.src"
            cover
        />
      </div>
    </template>

    <template v-slot:label="{isActive, isFocused}">
      <v-icon class="add__icon" size="large">
        mdi-plus
      </v-icon>
    </template>
    <template v-slot:selection/>
  </v-file-input>
</template>

<script>
export default {
  name: 'image-upload',
  props: ['prepend-icon', 'multiple', 'draggable', 'hide-details', 'clearable', 'images'],
  emits: ['addFile', 'deleteFile'],
  data: () => ({
    supportedImageFile: ['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml']
  }),
  computed: {
    loadImageIsFullWidth() {
      return this.images?.length <= 0
    }
  },
  methods: {
    onLoad(loadFiles) {
      if(loadFiles?.length < 1) return

      loadFiles.forEach(file => {
        if(this.imageExists(file?.name) || !this.supportedImageFile.includes(file?.type)){
          console.log('Файл уже загружен или не поддерживается')
          return
        }

        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
          file.src = reader.result
          this.$emit('addFile', file)
        }

        reader.onerror = () => {
          console.log(`Ошибка - ${reader.error}`)
        }
      })
    },
    imageExists(name) {
      let exists = false

      if(!name) return exists

      this.images.forEach(item => {
        if(item?.name === name) exists = true
      })

      return exists
    }
  }
}
</script>

<style>
.custom__file-input {
  display: flex !important;
}

.custom__file-input .v-input__append {
  flex-wrap: wrap;
}

.custom__file-input .added__files,
.custom__file-input .v-input__control {
  width: 100px;
  min-width: 100px;
  height: 120px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.custom__file-input.full-width .v-input__control {
  width: 100%;
}

.custom__file-input .v-input__control {
  background: linear-gradient(0deg, rgba(80, 88, 164, 0.08), rgba(80, 88, 164, 0.08)), #FBFEFF;
  border: 1px dashed #49454F;
}

.custom__file-input .added__files {
  position: relative;
  border: 1px solid #AEAAAE;
  margin-right: 15px;
  margin-bottom: 10px;
}

.custom__file-input .added__files .added__files-delete-wrap {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 25px;
  height: 25px;
  background: #fff;
  padding: 3px;
  z-index: 9;
  border-radius: 50%;
}

.custom__file-input .added__files .added__files-delete {
  width: 100%;
  height: 100%;
  border: 2px solid #49454F;
  border-radius: 50%;
}

.custom__file-input .added__files .added__files-delete:hover {
  cursor: pointer;
}

.custom__file-input .added__files .added__files-delete-icon {
  position: absolute;
  font-size: 16px;
}

.custom__file-input.full-width .v-input__append,
.custom__file-input .v-field__overlay,
.custom__file-input .v-input__prepend,
.custom__file-input .v-field__outline {
  display: none;
}

.custom__file-input .v-label {
  width: 100%;
  visibility: visible !important;
  opacity: var(--v-medium-emphasis-opacity) !important;
  transform-origin: initial !important;
  animation: none !important;
}

.custom__file-input .v-label .add__icon {
  margin: auto;
  width: 28px !important;
  height: 28px !important;
}

.custom__file-input .v-label.v-field-label--floating {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 64px !important;
  display: none !important;
}
</style>