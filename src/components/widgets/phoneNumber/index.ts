import PhoneNumber from './PhoneNumber.svelte';

import { getGuiFields } from '@utils/utils';
import { type Params, GuiSchema, GraphqlSchema } from './types';
import { defaultContentLanguage } from '@stores/store';

//ParaglideJS
import * as m from '@src/paraglide/messages';

// Define the widget function
const widget = (params: Params) => {
	// Define the display function
	let display: any;

	if (!params.display) {
		display = async ({ data }) => {
			// console.log(data);
			data = data ? data : {}; // Ensure data is not undefined
			// Return the data for the default content language or a message indicating no data entry
			return data[defaultContentLanguage] || m.widgets_nodata();
		};
		display.default = true;
	} else {
		display = params.display;
	}

	// Define the widget object
	const widget: { type: typeof PhoneNumber; key: 'PhoneNumber'; GuiFields: ReturnType<typeof getGuiFields> } = {
		type: PhoneNumber,
		key: 'PhoneNumber',
		GuiFields: getGuiFields(params, GuiSchema)
	};

	// Define the field object
	const field = {
		// default fields
		display,
		label: params.label,
		db_fieldName: params.db_fieldName,
		translated: params.translated,
		required: params.required,
		icon: params.icon,
		width: params.width,
		helper: params.helper,

		//extra
		placeholder: params.placeholder,
		count: params.count,
		minlength: params.minlength,
		maxlength: params.maxlength,
		pattern: params.pattern,
		size: params.size,
		readonly: params.readonly
	};

	// Return the field and widget objects
	return { ...field, widget };
};

// Assign GuiSchema and GraphqlSchema to the widget function
widget.GuiSchema = GuiSchema;
widget.GraphqlSchema = GraphqlSchema;

// Export FieldType interface and widget function
export interface FieldType extends ReturnType<typeof widget> {}
export default widget;
