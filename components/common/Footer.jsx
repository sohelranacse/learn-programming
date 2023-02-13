import Image from "next/image";
import React from "react";
import Link from "next/link";

import Highlight from "react-highlight";
import "highlight.js/styles/night-owl.css";

const CodeBlock = ({ code, language }) => {
  return <Highlight className={language}>{code}</Highlight>;
};

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto">
      This is footer
      <p>Hello</p>
      <CodeBlock
        code={`import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlock = ({ code, language }) => (
  <Highlight className={language}>{code}</Highlight>
);

export default CodeBlock;
`}
        language={"language-javascript"}
      />
      <div className="my-4"></div>
      <CodeBlock
        code={`function get_distributor_offer_requisition_data() {
		if(!empty($_POST)) {
			$this->form_validation->set_rules('distributor_id', 'distributor_id', 'trim|numeric|required');
			if($this->form_validation->run() == TRUE) {
				$distributor_id = $this->input->post('distributor_id');
				$Mydata['challan_info'] = $this->distributor_mdl->get_distributor_offer_requisition_data($distributor_id);
				$Mydata['product_type'] = $this->distributor_mdl->get_distributor_item_type();		
				$data['result'] = $this->load->view('distributor/offer_requisition_data', $Mydata, true);
			} else {
				$data['result'] = 'error';
			}
			echo json_encode($data['result']);
		}
	}`}
        language={"language-javascript"}
      />
    </div>
  );
}

export default Footer;
