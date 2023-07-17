<template>
  <div>
    <div class="col-md-12 p-0">
      <div class="tableContent">
        <div v-if="title" class="tableTitle"> {{ title }} </div>
        <div class="table-responsive" :class="{'sticky': sticky}" :style="{'max-height': height}">
          <table class="table">
            <thead>
              <slot name="thead"></slot>
            </thead>
            <tbody>
              <slot name="tbody"></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComp',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: 'auto'
    },
    sticky: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .tableContentMargin {
    margin-bottom: 90px;
  }
  :deep(.tableContent) {
    background:#fff;
    border-radius: 4px;
    box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.3);
    .tableTitle {
      height: 48px;
      font-size: 17px;
      font-family: "Avenir-Black";
      background: #dddddd;
      color: #5b5b5b;;
      text-align: center;
      line-height: 48px;
    }
    table {
      width: 100%;
      margin-bottom: 0px;
      thead {
        position: sticky;
        top: 0;
        tr {
          th {
            font-size:13px;
            background:#efefef;
            color:#5b5b5b;
            padding:5px;
            border-right:1px solid #fff;
            height: 44px;
            vertical-align: middle;
            text-align: center;
            border-bottom: 1px solid #dee2e6;
            &:last-child {
              border-right: none !important;
              border-top-right-radius: 4px;
            }
            &:first-child {
              border-top-left-radius: 4px;
              padding-left: 15px;
              padding-right: 15px;
            }
          }
        }
      }
      tbody {
        tr {
          transition-duration: 0.3s;
          td {
            font-size:13px;
            color:#8d8d8d;
            padding:15px;
            vertical-align: middle;
            text-align: center;
            border-right:1px solid #f3f3f3;
            padding-top:9px;
            padding-bottom:9px;
            &:first-child {
              color:#5b5b5b;
            }
            &:last-child {
              border-right: none !important;
            }
          }
          &:hover {
            box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
            td {
              border-right:1px solid #f3f3f3;
            }
          }
        }
      }
    }
    .table-responsive {
      margin-bottom: 0 !important;
      &.sticky {
        .table {
          thead {
            position: sticky; top: 0; z-index: 1;
            border-bottom:1px solid #333;
          }
        }
      }
    }
  }
  :deep(.tableContent) {
    .table-responsive {
      margin-bottom: 0 !important;
    }
  }
</style>
