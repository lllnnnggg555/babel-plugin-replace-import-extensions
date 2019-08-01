import React from 'react'
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, Checkbox,
  Row, Col
} from 'fish'

const { Option } = Select

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('收到表单值：', values)
      }
    })
  }

  normFile = (e) => {
    console.log('上传 event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="纯文本"
        >
          <span className="fish-form-text">中国</span>
        </Form.Item>
        <Form.Item
          label="选择器"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: '请选择国籍!' }
            ]
          })(
            <Select placeholder="请选择国籍">
              <Option value="china">中国</Option>
              <Option value="usa">美国</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="选择器[multiple]"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: '请选择喜欢的颜色!', type: 'array' }
            ]
          })(
            <Select mode="multiple" placeholder="请选择喜欢的颜色">
              <Option value="red">红</Option>
              <Option value="green">绿</Option>
              <Option value="blue">蓝</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="数字输入框"
        >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <InputNumber min={1} max={10} />
          )}
          <span className="fish-form-text"> 台</span>
        </Form.Item>

        <Form.Item
          label="开关"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </Form.Item>

        <Form.Item
          label="滑动输入条"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{
              0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F'
            }}
            />
          )}
        </Form.Item>

        <Form.Item
          label="单选框组合"
        >
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">项目 1</Radio>
              <Radio value="b">项目 2</Radio>
              <Radio value="c">项目 3</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item
          label="单选按钮"
        >
          {getFieldDecorator('radio-button')(
            <Radio.Group>
              <Radio.Button value="a">项目 1</Radio.Button>
              <Radio.Button value="b">项目 2</Radio.Button>
              <Radio.Button value="c">项目 3</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item
          label="复选框组合"
        >
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B']
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                <Col span={8}><Checkbox disabled value="B">B</Checkbox></Col>
                <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                <Col span={8}><Checkbox value="E">E</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>

        <Form.Item
          label="评分"
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5
          })(
            <Rate />
          )}
        </Form.Item>

        <Form.Item
          label="上传"
          extra="请上传图片格式文件，文件大小不超过10M"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          )}
        </Form.Item>

        <Form.Item
          label="拖动上传"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="fish-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="fish-upload-text">点击或将文件拖拽到此区域上传</p>
                <p className="fish-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
              </Upload.Dragger>
            )}
          </div>
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
}

export const WrappedDemo = Form.create({ name: 'validate_other' })(Demo)
